
    export type RemoteKeys = 'remote1/LandingPageRemote1';
    type PackageType<T> = T extends 'remote1/LandingPageRemote1' ? typeof import('remote1/LandingPageRemote1') :any;