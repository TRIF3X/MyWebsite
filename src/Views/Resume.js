import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const Resume = () => (
  <Modal
    trigger={
    <Button basic inverted className='mainButtonActual'>
    Resume
    </Button>
    }
    header='Reminder!'
    content='Call Benjamin regarding the reports.'
    actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
  />
)

export default Resume