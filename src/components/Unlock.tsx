import { Card } from '@amg/styleguide';

export const Unlock = ({ eventEmitter }) => {
  const onLogin = (evt) => {
    eventEmitter.emit({
      type: 'login',
      data: {
        provider: evt.target.id,
        callbackRoute: '/dapp1',
        nativeAuth: true,
      }
    });
  };

  return (
    <section>
      <div
        className='flex justify-center'
        style={{ height: 'calc(100vh - 120px)' }}
      >
        <Card className='max-w-7xl h-full'>
          <div className='flex justify-center items-center'>
            <div
              className='flex flex-col p-6 items-center justify-center gap-4'
              data-testid='unlockPage'
            >
              <div className='flex flex-col items-center gap-1 text-black'>
                <h2 className='text-2xl'>Login</h2>

                <p className='text-center text-black'>Choose a login method</p>
              </div>

              <div className='flex flex-col md:flex-row gap-2'>
                <button
                  id='xPortal'
                  onClick={onLogin}
                  className='inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-blue-600 text-white hover:bg-blue-700 ml-2 mr-0'
                >
                  xPortal App
                </button>
                <button
                  id='ledger'
                  onClick={onLogin}
                  className='inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-blue-600 text-white hover:bg-blue-700 ml-2 mr-0'
                >
                  Ledger
                </button>
                <button
                  id='extension'
                  onClick={onLogin}
                  className='inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-blue-600 text-white hover:bg-blue-700 ml-2 mr-0'
                >
                  DeFi Wallet
                </button>
                <button
                  id='web'
                  onClick={onLogin}
                  className='inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-blue-600 text-white hover:bg-blue-700 ml-2 mr-0'
                >
                  Web Wallet
                </button>
                <button
                  id='xAlias'
                  onClick={onLogin}
                  className='inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-blue-600 text-white hover:bg-blue-700 ml-2 mr-0'
                >
                  xAlias
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
