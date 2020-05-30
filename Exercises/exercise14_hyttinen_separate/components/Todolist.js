import React from 'react';

export default function Todotable(props) {
    return (
        <div>
            <table>
                <tbody>
                    <th>Date</th><th>Description</th><th>Delete</th>
                    {
                        props.todos.map((desc, index) =>
                            <tr key={index}>
                                <td>{desc.date}</td>
                                <td>{desc.description}</td>
                                <td><button id={index} onClick={props.deleteEntry}>Delete</button></td>
                            </tr>
                        )
                    }</tbody></table>
        </div>
        
    );
}