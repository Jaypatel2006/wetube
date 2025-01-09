class apierror extends Error{
    constructor(statuscode,message="error occured",errors=[]){
        super(message)
        this.statuscode=statuscode
        this.errors=errors
        this.message=message
        this.data=null
        this.success = false
    }
}
export {apierror}