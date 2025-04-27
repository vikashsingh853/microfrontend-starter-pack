
    export type RemoteKeys = 'remote2/LandingPageRemote2';
    type PackageType<T> = T extends 'remote2/LandingPageRemote2' ? typeof import('remote2/LandingPageRemote2') :any;