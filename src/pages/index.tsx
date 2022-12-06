import Head from 'next/head';
import Timer from 'src/components/Timer/Timer';
import MonsterMenu from 'src/components/MonsterMenu/MonsterMenu';
import SelectedScreen from 'src/components/SelectedScreen/SelectedScreen';

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Next TypeScript Starter</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Timer></Timer>

			<main className="main">
				<h1 className="title">Musical Monsters</h1>
				<SelectedScreen></SelectedScreen>
				<MonsterMenu></MonsterMenu>
			</main>
		</div>
	);
}
