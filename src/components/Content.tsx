import { Card } from '@amg/styleguide';

export const Content = () => {
  return (
    <section>
      <div
        className='flex justify-center'
        style={{ height: 'calc(100vh - 120px)' }}
      >
        <Card className='max-w-7xl h-full'>
          <div className='text-gray-700'>Homepage</div>
        </Card>
      </div>
    </section>
  );
};
