import PageLayout from "@/components/layout/PageLayout";

function Home() {
  return (
    <PageLayout
      title="Home"
      headerComponents={
        <button onClick={() => console.log("btn")}>Button</button>
      }
    >
      <div>Hello world</div>
    </PageLayout>
  );
}

export default Home;
