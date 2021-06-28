import React, { useState } from 'react';
import './process.css';
import { processData } from './processData';
import ProcessItem from './processItem';

const Process = () => {
    const [itemsShow, setItemShow] = useState('concept');
    const [list, setList] = useState(processData.filter(item => item.id.includes(itemsShow)));

    const updateItemsShow = (str) => {
        console.log('update')
        setItemShow({ itemsShow: str })
        setList(processData.filter(item => item.id.includes(str)))
    }



    return (
        <section id="process-block">
            <div className="container">
                <div className="row">
                    <div className="section-title text-center wow fadeInUp">
                        <h2>The process</h2>
                    </div>
                    <div>
                        <ul className="nav nav-tabs">
                            <li onClick={() => updateItemsShow('concept')}><a ><i className="fa fa-star-o"></i>
                                <h5 >01. Concept</h5>
                            </a>
                            </li>
                            <li><a ><i className="fa fa-copy"></i>
                                <h5 onClick={() => updateItemsShow('prototyping')}>02. Prototyping</h5>
                            </a>
                            </li>
                            <li><a><i className="fa fa-laptop"></i>
                                <h5 onClick={() => updateItemsShow('design')}>03. Design</h5>
                            </a>
                            </li>
                            <li><a ><i className="fa fa-code"></i>
                                <h5 onClick={() => updateItemsShow('development')}>04. Development</h5>
                            </a>
                            </li>
                        </ul>

                        <div className="tab-content">

                            {
                                list.map((item) => <ProcessItem item={item} />)
                            }
                            
                        </div>

                    </div>

                </div>
            </div>
        </section>

    )
}

export default Process;