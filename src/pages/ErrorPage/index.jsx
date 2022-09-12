import * as E from './styles';

function ErrorPage() {
    return (
        <E.Container>
            <h1>404</h1>
            <h2><span>Ops!</span> Não conseguimos <br /> encontrar essa página.</h2>
        </E.Container>
    );
}

export default ErrorPage;