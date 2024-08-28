import './App.css';
import { Button, Alert, Card } from 'antd';

function App() {
  return (
    <div className="App">
      <Button type="primary">hola</Button>
      <Alert showIcon message="Success Text" type="info" closable description="" />
      <Card title="Something" extra={<a href="#">More</a>}>
          <p>hola</p>
      </Card>
      
    </div>
  );
}

export default App;
