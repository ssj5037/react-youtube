import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VideoCard from "../VideoCard";
import { Route } from "react-router-dom";
import { format } from "timeago.js";
import { fakeVideo as video } from "../../tests/videos";
import { withRouter } from "../../tests/utils";
import renderer from "react-test-renderer";

describe("VideoCard", () => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  // 정적 테스트 => snapshot
  it("renders grid type correctly", () => {
    const component = renderer
      .create(
        withRouter(<Route path="/" element={<VideoCard video={video} />} />)
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it("renders list type correctly", () => {
    const component = renderer
      .create(
        withRouter(
          <Route
            path="/"
            element={
              <VideoCard
                video={video}
                // type={'list'}
              />
            }
          />
        )
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it("renders video item", () => {
    render(
      withRouter(<Route path="/" element={<VideoCard video={video} />} />)
    );
    const image = screen.getByRole("img");
    expect(image.src).toBe(thumbnails.medium.url);
    expect(image.alt).toBe(title);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(channelTitle)).toBeInTheDocument();
    expect(
      screen.getByText(format(new Date(publishedAt).getTime(), "ko"))
    ).toBeInTheDocument();
  });

  // 동적 테스트
  it("navigates to detailed video page with video state when clicked", async () => {
    // 이동하는지 확인하기 위한 테스트용 컴포넌트
    function LocationStateDisplay() {
      return <pre>컴포넌트 이동</pre>;
    }
    render(
      withRouter(
        <>
          <Route path="/" element={<VideoCard video={video} />} />
          <Route
            path={`/watch/${video.id}`}
            element={<LocationStateDisplay />}
          />
        </>
      )
    );

    const card = screen.getByRole("listitem");
    await userEvent.click(card);
    expect(screen.getByText("컴포넌트 이동")).toBeInTheDocument();
  });
});
