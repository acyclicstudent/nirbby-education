// Esta ruta carga el modulo de admin.
import Loadable from 'react-loadable';
import Loader from 'react-loaders';

const InstitutesModule = Loadable.Map<any, any>({
    loader: {
        InstitutesRouter: () => {
            console.log('Loading Institutes module...');
            return import('./InstitutesRouter')
        }
    },
    loading: () => <Loader 
        active
        type="line-scale"
    />,
    render(loaded, props) {
        const InstitutesRouter = loaded.InstitutesRouter.default;
        return <InstitutesRouter {...props} />
    }
});

export default InstitutesModule;