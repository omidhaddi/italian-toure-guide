import routeController from '../../controllers/route'


export default function ShowCity({routes}) {

    return (

        <>
        <h3>Routes</h3>
        <br/>
        <ul>

        {routes.map(route => <li key={route.id}>{route.price}</li>)}

        </ul>
        
        </>
    )

}


export async function getServerSideProps(req, res) {
    const routes = await routeController.all();
    console.log(routes);

    return {
        props: { routes },
    };
}