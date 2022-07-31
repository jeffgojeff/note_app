//Function return notes data in Cards

import 'antd/dist/antd.css';
import { Card } from 'antd';



function Cards(props) {

    return props.data ? props.data.map( x => {
          return(
                <Card.Grid title={x.key} key={x.key} hoverable={true}>
                    {x.notes}
                </Card.Grid>
          )
      }) : null
}


export default Cards