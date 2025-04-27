import { useEffect, useState, ReactNode, JSX } from 'react';
import { loadRemote } from '@module-federation/enhanced/runtime';

type RemoteModule<T> = { default: (props: T) => JSX.Element };

/**
 * A custom hook to dynamically load a remote React component using Module Federation.
 *
 * @template T - The props type for the remote component.
 * @param {string} remotePath - The path to the remote component to be loaded.
 * @returns {Object} An object containing:
 *   - `RemoteComponent`: The loaded remote component or null if loading failed.
 *   - `isRemoteComponentLoading`: A boolean indicating if the component is still loading.
 */

/**
 * A custom hook to dynamically load a remote React component using Module Federation.
 *
 * @template T - The props type for the remote component.
 * @param {string} remotePath - The path to the remote component to be loaded.
 * @returns {Object} An object containing:
 *   - `RemoteComponent`: The loaded remote component or null if loading failed.
 *   - `isRemoteComponentLoading`: A boolean indicating if the component is still loading.
 */
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
        /**
         * Load a remote component dynamically using Module Federation.
         *
         * @private
         * @async
         * @returns {Promise<void>} A promise that resolves when the component is loaded.
         */
        const loadComponent = async () => {
            try {
                const res = await loadRemote(remotePath);
                if (!isValidRemoteComponent(res)) {
                    throw new Error(`Failed to load remote component: ${remotePath}`);
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