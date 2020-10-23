import { Button } from "shards-react";

export default () => {

  return (
    <div className="example">
      <Button>Primary</Button>
      <Button theme="secondary">Secondary</Button>
      <Button theme="success">Success</Button>
      <Button theme="info">Info</Button>
      <Button theme="warning">Warning</Button>
      <Button theme="danger">Danger</Button>
      <Button theme="light">Light</Button>
      <Button theme="dark">Dark</Button>
    </div>
  )
}