import Button from '@kiwicom/orbit-components/lib/Button';
import InputField from '@kiwicom/orbit-components/lib/InputField';
import InputGroup from '@kiwicom/orbit-components/lib/InputGroup';
import Layout, { LayoutColumn } from '@kiwicom/orbit-components/lib/Layout';
import List from '@kiwicom/orbit-components/lib/List';
import ListChoice from '@kiwicom/orbit-components/lib/ListChoice';
import { ReactElement, useState } from 'react';
import { useGetLocationsQuery } from './app/api';
import { Location } from './app/types';

export default (): ReactElement => {
  const [hintTerm, setHintTerm] = useState('');
  const [toDestitation, setToDestitation] = useState('');
  const [fromDestitation, setFromDestitation] = useState('');
  const [selectedFrom, setSelectedFrom] = useState<Location|null>(null);
  const [selectedTo, setSelectedTo] = useState<Location|null>(null);
  const [showFromHints, setShowFromHints] = useState(false);
  const [showToHints, setShowToHints] = useState(false);
  const { data: locations } = useGetLocationsQuery({
    term: hintTerm, type: 'airport'
  },{
    skip: hintTerm === '',
  });

  return (
    <div className='App'>
      <Layout type='Search'>
        <LayoutColumn>Calling for peace ?</LayoutColumn>
        <LayoutColumn>
          <InputGroup>
            <InputField
              placeholder={'from'}
              value={fromDestitation}
              onChange={(e) => {
                setFromDestitation(e.target.value);
                setHintTerm(e.target.value);
              }}
              onFocus={() => { setShowFromHints(true); }}
              onBlur={() => { setShowFromHints(false); }}
            />
            <InputField
              placeholder={'to'}
              value={toDestitation}
              onChange={(e) => {
                setToDestitation(e.target.value);
                setHintTerm(e.target.value);
              }}
              onFocus={() => { setShowToHints(true); }}
              onBlur={() => { setShowToHints(false); }}
            />
          </InputGroup>
        </LayoutColumn>
        <LayoutColumn>
          <Button disabled={!selectedFrom || !selectedTo}>Search</Button>
        </LayoutColumn>
      </Layout>
      <Layout type='Search'>
        <LayoutColumn> </LayoutColumn>
        <LayoutColumn>
          {showFromHints && <>
        did you mean one of these ?
            {
              locations?.locations.map(
                (location: Location) => {
                  return (<ListChoice
                    key={location.id}
                    title={location.name}
                    onClick={(e) => {
                      console.log('clicked'); //why is this not working ?

                      setSelectedFrom(location);
                      setFromDestitation(location.name);
                    }}
                  />);
                }
              )
            }
          </>
          }
          {showToHints && <>
        did you mean one of these ?
            <List>
              {
                locations?.locations.map(
                  (location: Location) => {
                    return (<ListChoice
                      key={location.id}
                      title={location.name}
                      onClick={() => {
                        setSelectedTo(location);
                        setToDestitation(location.name);
                      }}
                    />);
                  }
                )
              }
            </List>
          </>
          }
        </LayoutColumn>
        <LayoutColumn> </LayoutColumn>
      </Layout>
      <Layout type='MMB'>
        <LayoutColumn>Did you know that Walnut is an opposite of kiwi?</LayoutColumn>
      </Layout>
    </div>
  );
};
