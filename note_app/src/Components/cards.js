//Function returns notes data in Cards

import 'antd/dist/antd.css';
import { Card, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'



function Cards(props) {

    return props.data ? props.data.map( x => {
          return(
                <Card.Grid key={x.key} >
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