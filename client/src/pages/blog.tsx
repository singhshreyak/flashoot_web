export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-muted-foreground">
            Latest insights & stories from Flashoot.
          </p>
        </div>
      </div>
    </div>
  );
}
