import React, { Component} from 'react'
import Client from './Contentiful'


const LabettieContext = React.createContext()
export default class LabettieProvider extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            items:[],
            context:[],
            homeImages:[],
            newImages:[],
            itemProduct:[],
            products:[]

           
             
        }
    }
    

   getData = async () => {
      
        try {
            let response = await Client
                .getEntries({
                    content_type: 'post'
                })
                .then((response) => this.setState({
                    items:response.items
                }),
                )
                let posts = this.organiseData(this.state.items)
                
               
                this.setState({
                    context:posts
            
                })

        } catch (error) {
            console.log(error);
            
        }
      
    }
   getProducts = async () => {
      
        try {
            let response = await Client
                .getEntries({
                    content_type: 'laBettieProducts'
                })
                .then((response) => this.setState({
                    itemProduct:response.items
                }),
                )
                let posts = this.organiseData(this.state.itemProduct)
                
               
                this.setState({
                    products:posts
            
                })

        } catch (error) {
            console.log(error);
            
        }
      
    }
    getImages = async () => {
      
        try {
            let response = await Client
                .getEntries({
                    content_type: 'labettiedesignHomeImages'
                })
                .then((response) => this.setState({
                    homeImages:response.items
                }),
    
                )
                             let posts = this. organiseData(this.state.homeImages)
                
               
                this.setState({
                   newImages:posts
            
                })


        } catch (error) {
            console.log(error);
            
        }
      
    }


    

  

    organiseData = (items) =>{
        let temppost = items.map(item=>{
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);
            let post = {...item.fields,images,id}
           return post
        })
        return temppost
     
    }
  
    


    filterpost = (blogpost)=>{
        const mycontext = [...this.state.products]
        const post = mycontext.filter(item=> item.blogpost === this.state.blogpost);
        return post
    }

    filterProduct = (slug) =>{

        let product = [...this.state.products]
        let tempProducts = product.find(item => item.slug===slug)
        return tempProducts
    }
    



    componentDidMount(){
        this.getData()
        this.getImages()
        this.getProducts()
        this. filterProduct()
   
        
        
       
        
    }

    render() {
        return <LabettieContext.Provider value={{context:this.state.context,
        images:this.state.newImages,
        products:this.state.products,
        filterProduct:this. filterProduct,
        filterpost: this.filterpost

        }}>
        {this.props.children}
    </LabettieContext.Provider>
    }
}


const LabettieConsumer = LabettieContext.Consumer

export{LabettieProvider,LabettieContext,LabettieConsumer}
