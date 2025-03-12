import PhotoEditor from "@/components/photo-editor";

export default function PhotoEditorPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-8 px-4">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Photo Editor
            </h1>
            <p className="text-muted-foreground">
              Apply real-time filters and effects to your photos
            </p>
          </div>
          
          <PhotoEditor />
        </div>
      </div>
    </div>
  );
}
