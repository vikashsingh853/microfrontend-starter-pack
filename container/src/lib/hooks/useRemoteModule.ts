import { useEffect, useState, ReactNode, JSX } from 'react';
import { loadRemote } from '@module-federation/enhanced/runtime';

type RemoteModule<T> = { default: (props: T) => JSX.Element };

const useRemoteModule = <T extends object = object>(remotePath: string) => {
    const [RemoteComponent, setRemoteComponent] = useState<React.ComponentType<
        T & { children?: ReactNode }
    > | null>(null);
    const [isRemoteComponentLoading, setIsRemoteComponentLoading] =
        useState(true);

    const isValidRemoteComponent = <T>(res: unknown): res is RemoteModule<T> => {
        if (!res || typeof (res as RemoteModule<T>).default !== 'function')
            return false;

        const Component = (res as RemoteModule<T>).default;

        return (
            typeof Component === 'function' &&
            (Component.prototype === undefined ||
                typeof Component.prototype.render === 'function')
        );
    };

    useEffect(() => {
        const loadComponent = async () => {
            try {
                const res = await loadRemote(remotePath);
                if (!isValidRemoteComponent(res)) {
                    throw new Error(`Failed to load remote component: ${ remotePath }`);
                }
                setRemoteComponent(
                    () =>
                        res.default as React.ComponentType<T & { children?: ReactNode }>,
                );
            } catch (error) {
                console.error('Error loading remote component:', error);
                setRemoteComponent(null);
            } finally {
                setIsRemoteComponentLoading(false);
            }
        };

        loadComponent();
    }, [remotePath]);

    return { RemoteComponent, isRemoteComponentLoading };
};

export default useRemoteModule;