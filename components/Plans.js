import Error from '../components/ErrorMessage';
import GetPlansList from './wrappers/GetPlansList';
import Subscribe from './Subscribe';

const Plans = props => {
    return (
        <div>
            <GetPlansList>
                {({ data: { getPlansList }, error }) => {
                    if (error) return <Error error={error} />
                    return (
                        <div>
                            <h1> Our Plans </h1>
                            {getPlansList.map((p, i) => (<Subscribe key={i} plan={p} />))}
                        </div>
                    )
                }}
            </GetPlansList>
        </div>
    );
};

export default Plans;
