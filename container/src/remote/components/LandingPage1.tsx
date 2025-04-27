import useRemoteModule from '../../lib/hooks/useRemoteModule'

const LandingPage1 = () => {
    const { RemoteComponent, isRemoteComponentLoading } = useRemoteModule("remote1/LandingPageRemote1")

    if (isRemoteComponentLoading) {
        return <div>Loading...</div>;
    }
    if (!RemoteComponent) return <></>

  return (
      <RemoteComponent />
  )
}

export default LandingPage1