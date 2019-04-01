import Error from '../components/ErrorMessage';
import GetPlansList from './GetPlansList';
import gql from 'graphql-tag';

const Protected = props => {
    return (
        <div>
            <GetPlansList>
                {({ data: { getPlansList }, error }) => {
                    if (error) return <Error error={error} />
                    return (
                        <div>
                            <h1> Our Plans </h1>
                            {getPlansList.map((p, i) => (<h2 key={i}>{p.planId}</h2>))}
                        </div>
                    )
                }}
            </GetPlansList>
        </div>
    );
};

export default Protected;
