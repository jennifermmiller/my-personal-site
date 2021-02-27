import PageTitle from '../../components/PageTitle';
import GenericContent from '../../components/GenericContent';

// TODO: Add images
const Chuck = props => {
    const { content, title } = props;
 
    return (
        <>
            <PageTitle title={title}/>
            <GenericContent content={content}/>
        </>
    )
}

export default Chuck;