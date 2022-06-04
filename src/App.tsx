import './App.css'
import Leaf from './components/leaf'

export interface leaf {
  name: string;
  total: number;
  target: number;
  branch?: leaf[];
}

function App() {

  const leafs:leaf[] = [
     {
          name: 'Factory A',
          total: 3,
          target: 10,
          branch: [
                {
                      name: 'Godown A',
                      total: 2,
                      target: 4
                },
                {
                      name: 'Godown B',
                      total: 1,
                      target: 6
                }
              ]
     },
     {
          name: 'Factory B',
          total: 5,
          target: 10,
          branch: [
                {
                      name: 'Godown A',
                      total: 3,
                      target: 4
                },
                {
                      name: 'Godown B',
                      total: 2,
                      target: 6 
                }]
     },
     {
          name: 'Factory C',
          total: 2,
          target: 10,
          branch: [
                {
                      name: 'Godown A',
                      total: 1,
                      target: 5
                },
                {
                      name: 'Godown B',
                      total: 1,
                      target: 5
                }]
     },
    ]
  return (
    <div className="App h-screen bg-black text-white flex justify-center p-12">
     <Leaf name='Tata Steel' target={30} total={10} child={false} leafs={leafs}/>
    </div>
  )
}

export default App
