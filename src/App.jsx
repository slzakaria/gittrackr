import {FixedHeader} from "./components/FixedHeader";
import {MainSection} from "./components/MainSection";
import {SideBar} from "./components/SideBar";
import {TechProvider} from "./components/TechProvider";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<>
			<Toaster position='top-center' reverseOrder={false} />
			<FixedHeader />
			<TechProvider>
				<SideBar />
				<MainSection />
			</TechProvider>
		</>
	);
}

export default App;
