import Image from "next/image"

export default function DentistSearchResultsPage(): JSX.Element {
    return (
        <main>
            <ul>
                <li>
                    <div>
                        <Image src="/" alt="Picture of John Doe"/>
                        <div>John Doe</div>
                        <div>3 out of 5 stars</div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue eleifend libero, eu scelerisque elit cursus in.
                        </p>
                    </div>
                </li>
                <li>
                    <div>
                        <Image src="/" alt="Picture of Jane Doe"/>
                        <div>Jane Doe</div>
                        <div>5 out of 5 stars</div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue eleifend libero, eu scelerisque elit cursus in.
                        </p>
                    </div>
                </li>
            </ul>
        </main>
    )
}