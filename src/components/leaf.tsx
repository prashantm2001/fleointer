import { useState } from 'react';
import {AiOutlineArrowDown} from 'react-icons/ai';
import { leaf } from '../App';

interface props {
     name: string;
     total: number;
     target: number;
     child: boolean;
     leafs?: leaf[];
}

const Leaf = (props:props) => {
     const [click , setClick] = useState(false);
     const percentage = Math.round((props.total/props.target)*100);
     const track = percentage > 66 ? 'On track' : percentage > 33 ? 'Off track' : 'At risk';
     const color = percentage > 66 ? 'bg-green-500' : percentage > 33 ? 'bg-orange-400' : 'bg-red-500';
     const colorText = percentage > 66 ? 'text-green-700' : percentage > 33 ? 'text-orange-600' : 'text-red-700';
     const leafs1 = props.leafs;
     return (
     <div className='flex flex-col items-center '>
          {
               props.child ?
               <AiOutlineArrowDown size={30} className='text-2xl text-gray-500'/>
               : ''
          }
     <div className="bg-cyan-200 text-black h-44 w-80 rounded-xl mx-20" onClick={()=>setClick(!click)}>
          <div className="flex justify-between p-2">
               <h1 className="text-2xl font-bold">{props.name}</h1>
               <div className="flex">
               <p className="text-xl font-bold">{percentage}% </p>
               <p className="text-xl">complete</p>  
               </div>
          </div>
          <div className="flex justify-between p-2 mt-6">
               <div className="text-left font-bold">
                    <p className="text-xl">Total: {props.total} Lakh</p>
                    <p className="text-xl">Target: {props.target} Lakh</p>
               </div>
               <div>
                    <p className={`text-2xl rounded-lg p-2 bg-opacity-40 font-semibold ${color} ${colorText}`}>{track}</p>
               </div>
          </div>
          <div className="bg-gray-200 h-3 mx-3 rounded-3xl">
               <div className={`${color} h-3 rounded-3xl`} style={{ width : percentage + "%" }}></div>
          </div>
     </div>
     {
          (click && props.leafs) ? 
          <div>
               <div className="text-gray-500 text-3xl">
                    |
               </div>
          <div className="bg-gray-500 h-1 mx-60">
          </div>
               <div className='flex flex-row justify-between'>
                    {
                         props.leafs.map((leaf,index)=>{
                              return <Leaf key={index} name={leaf.name} total={leaf.total} target={leaf.target} child={true} leafs={leaf.branch}/>
                         })
                    }
               </div>
          </div>:""
     }
     </div>
     );
}

export default Leaf;