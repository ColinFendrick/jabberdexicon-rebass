import React from 'react'
import { Panel, PanelHeader, PanelFooter, Textarea, Close, Input, Space, Button } from 'rebass'

const NewEntry = ({ onDismiss }) => (
  <div className='NewEntry' style={{ maxWidth: '600px' }}>
    <Panel theme='info'>
      <PanelHeader
        inverted
        theme='default'>
      Add a New Entry
      <Space auto />
        <Close onClick={onDismiss} />
      </PanelHeader>
      <Input label='Input'
        name='input_example'
        placeholder='Placeholder'
        rounded
        type='text' />
      <Textarea
        defaultValue='New Definition'
        label='NewWord'
        name='NewWord'
      />
      <PanelFooter theme='default'>
        <Button>Submit</Button>
      </PanelFooter>
    </Panel>
  </div>
)

export default NewEntry
