interface Params {
    id: string;
  }

export default function PostDetails({ params }: {params: Params}) {
  const id = params.id;

  return <div>{id}</div>;
}
