import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4">
      <h1>
        <strong>
          Cheffelo Take-home test (choose <em>one</em> task)
        </strong>
      </h1>

      <p>
        This application is a simple listing app that displays a list of cars
        for sale. The app is built with Next.js, Redux Toolkit, and TailwindCSS.
      </p>

      <section>
        <ol className="flex flex-col gap-4">
          <li>
            <p>
              <strong>Task 1</strong>
            </p>
            <p>
              Implement the <code>GET</code>, <code>POST</code>, and{" "}
              <code>DELETE</code> API for the favorites API. The API can
              interact with the
              <code>devDb</code> object, which is a Low DB instance.
            </p>
            <p>
              Implement the <code>handleAddToFavorites</code> and{" "}
              <code>handleRemoveFromFavorites</code>
              functions in the <code>ListingCard</code> component while also
              updating the UI to reflect the change.
            </p>
            <p>
              There should also be a way to show all the user's favorite
              listings. You can implement this in a separate page or as a
              "filter" on the <Link href="/listings">listings page</Link>.
            </p>
            <p>
              The <code>favorites</code> API should also support optimistic
              updates.
            </p>
          </li>
          <li>
            <header>
              <strong>Task 2</strong>
            </header>
            <p>
              Implement an "infini-loader" in the <code>Listings</code>{" "}
              component. The infini-loader should fetch more listings when the
              user scrolls near the bottom of the page. The{" "}
              <Link href="/listings">listings page</Link> is already
              implemented, but all the items are loaded at once.
            </p>
            <p>In order to do this, you need to:</p>
            <ul className="pl-4 list-disc">
              <li>Implement pagination/cursor logic in the listings API.</li>
              <li>
                Use an IntersectionObserver to detect when the user has scrolled
                close enough to load the next page/batch of products.
              </li>
            </ul>
            <p>
              For this task, you are not allowed to install any libraries that
              help you with infinite scrolling.
            </p>
          </li>
        </ol>
      </section>

      <section>
        <header>
          <strong>Additional information</strong>
        </header>

        <p>
          You are free to implement the tasks in either JavaScript or
          TypeScript. And you can also ignore TailwindCSS and use any other
          preferred way of styling.
        </p>

        <p>
          When evaluating the test, we will put extra emphasis on the quality of
          code, how well you follow best practices, and how you structure your
          code. In addition we will evaluate use of correct semantic HTML and
          responsiveness. The graphic "look" of the app is not as important.
        </p>
      </section>

      <section>
        <h2>
          <strong>Resources</strong>
        </h2>

        <ul>
          <li>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js docs
            </a>
          </li>

          <li>
            <a
              href="https://redux-toolkit.js.org/usage/usage-guide"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit docs
            </a>
          </li>

          <li>
            <a
              href="https://redux-toolkit.js.org/rtk-query/usage/mutations"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit Query (mutations)
            </a>
          </li>

          <li>
            <a
              href="https://redux-toolkit.js.org/rtk-query/usage/manual-cache-updates#optimistic-updates"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit Query (optimistic updates)
            </a>
          </li>

          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
              target="_blank"
              rel="noopener noreferrer"
            >
              Intersection Observer API
            </a>
          </li>

          <li>
            <a
              href="https://tailwindcss.com/docs/installation"
              target="_blank"
              rel="noopener noreferrer"
            >
              TailwindCSS Docs
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
