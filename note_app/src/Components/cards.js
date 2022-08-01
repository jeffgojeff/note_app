//Function return notes data in Cards

import 'antd/dist/antd.css';
import { Card, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'



function Cards(props) {

    console.log(props)
    return props.data ? props.data.map( x => {
          return(
                <Card.Grid title={x.key} key={x.key} hoverable={true}>
                    {x.note}
                    <br/>
                    <Button 
                        icon={<DeleteOutlined />} 
                        shape="circle" 
                        size="small" 
                        onClick={() => props.onClick(x.key)} 
                        style={{float: 'right'}}>
                    </Button>
                </Card.Grid>
          )
      }) : null
}


export default Cards