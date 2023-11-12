import User from './User';

// if child component imports Shimmer component thien parent doesnot need to import Shimmer component.
export const About = () => {
    return (
        <div>
            <User/>
        </div>
    );
}
