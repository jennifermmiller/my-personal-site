import PageHeader from '../../components/PageHeader';
import GenericContent from '../../components/GenericContent';
import PageTitle from '../../components/PageTitle';

// TODO: Add images
const Chuck = props => {
    const { content, title } = props;
 
    return (
        <>
            <PageTitle tab="Chuck"/>
            <PageHeader title={title}/>
            <GenericContent content={content}/>
        </>
    )
}

export default Chuck;