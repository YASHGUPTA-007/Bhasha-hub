
import EditorPanel from "./_components/EditorPanel";
import Header from "./_components/Header";
import OutputPanel from "./_components/OutputPanel";
import ChatBot from "./_chatBot/ChatBot";
 
export default function Home() {
  return (
    <div>
    <div className="flex-grow">
      <div className="max-w-[1700px] mx-auto p-4 space-y-4">
        <Header />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <EditorPanel />
          <OutputPanel />
        </div>
      </div>
    </div>
    <ChatBot/>
    
    </div>
  );
}