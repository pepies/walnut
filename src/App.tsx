import Button from '@kiwicom/orbit-components/lib/Button';
import InputGroup from '@kiwicom/orbit-components/lib/InputGroup';
import Layout, { LayoutColumn } from '@kiwicom/orbit-components/lib/Layout';
import Select from '@kiwicom/orbit-components/lib/Select';
import { ReactElement } from 'react';

export default (): ReactElement => {
  return (
    <div className='App'>
      <Layout type='Search'>
        <LayoutColumn>Calling for peace ?</LayoutColumn>
        <LayoutColumn>
          <InputGroup>
            <Select options={[]} placeholder={'from'} />
            <Select options={[]} placeholder={'to'}/>
          </InputGroup>
        </LayoutColumn>
        <LayoutColumn>
          <Button>Search</Button>
        </LayoutColumn>
      </Layout>
      <Layout type='MMB'>
        <LayoutColumn>Did you know that Walnut is an opposite of kiwi?</LayoutColumn>
      </Layout>
    </div>
  );
};
