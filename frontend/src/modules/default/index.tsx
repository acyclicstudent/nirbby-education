// Esta ruta carga el modulo de admin.
import Loadable from 'react-loadable';
import Loader from 'react-loaders';

const DefaultModule = Loadable.Map<any, any>({
    loader: {
        DefaultRouter: () => {
            console.log('Loading App module...');
            return import('./DefaultRouter')
        }
    },
    loading: () => <Loader 
        active
        type="line-scale"
    />,
    render(loaded, props) {
        const DefaultRouter = loaded.DefaultRouter.default;
        return <DefaultRouter {...props} />
    }
});

export default DefaultModule;