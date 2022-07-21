// Esta ruta carga el modulo de admin.
import Loadable from 'react-loadable';
import Loader from 'react-loaders';

const CoachesModule = Loadable.Map<any, any>({
    loader: {
        CoachesRouter: () => {
            console.log('Loading Coaches module...');
            return import('./CoachesRouter')
        }
    },
    loading: () => <Loader 
        active
        type="line-scale"
    />,
    render(loaded, props) {
        const CoachesRouter = loaded.CoachesRouter.default;
        return <CoachesRouter {...props} />
    }
});

export default CoachesModule;