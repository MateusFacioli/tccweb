import React from 'react';

export class Calendar extends React.Component {
    constructor() {
        super();

        var today = new Date(),
            //today = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            
            //limit =limit.getDate()+limit.getMonth()+limit.getFullYear()
            //+limit.setHours(23)+limit.setMinutes(59);
            today = today.getDate() + '/'+ (today.getMonth()+1)+'/'+ today.getFullYear()
                    +'  '+ today.getHours()+':'+today.getMinutes()
            +'  em vigor até '+ ((today.setHours(23,0,0,0)/3600000)%2)+':'+((today.setMinutes(59,0,0)/60000)%60);
             // dividir por 2 ? era pra ser resto da divisao por 24
        
        this.state = {
            date: today
        };
    }

    render() {
        return (
            <div className='date'>
                   {this.state.date}
            </div>
        );
    }
}
export default Calendar;