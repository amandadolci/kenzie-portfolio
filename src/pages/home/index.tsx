// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/kenzie-portfolio`;

	return (
		<main id='home'>
			<Header>
				<Container>
					<HeaderContent>
						<Flex>
							<UserImage
								src={`https://github.com/${userData.githubUser}.png`}
								alt={userData.nameUser}
								title={userData.nameUser}
								width={'48px'}
								height={'48px'}
							/>
							<Text color='grey4'>
								Hello, I'm {userData.firstNameUser} and welcome to my portfolio!
							</Text>
						</Flex>
						<Text as='h1' type='heading1' color='grey5'>
							I{' '}
							<Text as='span' type='heading1' color='brand1'>
								thrive
							</Text>{' '}
							on programming logic, challenges, and{' '}
							<Text as='span' type='heading1' color='brand1'>
								finding
							</Text>{' '}
							solutions
						</Text>
						<Text type='body1' color='grey2'>
							I'm currently completing a year-long, 2000-hour full stack web development bootcamp,
							where I've learned the latest technologies and best practices for building modern web
							applications. I have experience with a variety of programming languages and
							frameworks, including HTML, CSS, JavaScript, TypeScript, React, Node.js, Python and
							Django.
						</Text>
						<Text type='body1' color='grey2'>
							Take a look at my portfolio to check some of the projects I've worked on:
						</Text>
						<HeaderButtonsArea>
							<Button as='a' type='primary' href='#projects'>
								Check Projects
							</Button>
							<Button as='a' type='outline' target='_blank' href={portfolioUrl}>
								My portfolio source code
							</Button>
							<Button
								color='grey5'
								as='a'
								css={{ '&:hover': { color: '$grey1' } }}
								type='circle'
								target='_blank'
								href={gihubUrl}>
								<FaGithub />
							</Button>
						</HeaderButtonsArea>
						<StackCards>
							{stackData.map((stack, index) => (
								<Stack key={index} title={stack.title} icon={stack.img} />
							))}
						</StackCards>
					</HeaderContent>
				</Container>
			</Header>
			<ProjectsArea id='projects'>
				<Container>
					<ProjectAreaWrapperColumns>
						<ProjectsAreaSocialMediaMessage>
							<Text as='h2' type='heading4' color='grey4'>
								My projects
							</Text>
							<Text as='p' type='body1' color='grey2'>
								Some of my{' '}
								<Text as='span' color='brand5'>
									side projects
								</Text>
							</Text>
						</ProjectsAreaSocialMediaMessage>
						<ProjectsAreaContent>
							<Project />
						</ProjectsAreaContent>
					</ProjectAreaWrapperColumns>
				</Container>
			</ProjectsArea>
			<Contacts />
		</main>
	);
};
