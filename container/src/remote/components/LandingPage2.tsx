import useRemoteModule from '../../lib/hooks/useRemoteModule';

const LandingPage2 = () => {
    const { RemoteComponent, isRemoteComponentLoading  } = useRemoteModule<any>("remote2/LandingPageRemote2")

    if (isRemoteComponentLoading) {
        return <div>Loading...</div>;
    }
    if (!RemoteComponent) return <></>
  return (
      <RemoteComponent />
  )
}

export default LandingPage2