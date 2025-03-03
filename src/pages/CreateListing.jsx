export default function CreateListing(){
    return(
        <div>
            <h1>Create a Listing</h1>
            <form>
                <input type="text" placeholder="Listing title"/>
                <input type="text" placeholder="Listing description"/>
                <input type="number" placeholder="Listing price"/>
            </form>
        </div>
    )
}