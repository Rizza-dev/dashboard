export default async function SingleProductPage({ params }) {
    const {id} = params;
    return (
        <div>product id : {id}</div>
    )
}