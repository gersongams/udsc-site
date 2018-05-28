import React from "react";
import PropTypes from "prop-types";
import ImageGallery from 'react-image-gallery';

const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';


export class GalleryPageTemplate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showIndex: false,
            showBullets: true,
            infinite: true,
            showThumbnails: true,
            showFullscreenButton: true,
            showGalleryFullscreenButton: true,
            showPlayButton: false,
            showGalleryPlayButton: true,
            showNav: true,
            slideDuration: 450,
            slideInterval: 2000,
            thumbnailPosition: 'bottom',
            showVideo: {},
        };

        this.images = [
            {
                thumbnail: `${PREFIX_URL}4v.jpg`,
                original: `${PREFIX_URL}4v.jpg`,
            },
            {
                original: `${PREFIX_URL}image_set_default.jpg`,
                thumbnail: `${PREFIX_URL}image_set_thumb.jpg`,
                imageSet: [
                    {
                        srcSet: `${PREFIX_URL}image_set_cropped.jpg`,
                        media : '(max-width: 1280px)',
                    },
                    {
                        srcSet: `${PREFIX_URL}image_set_default.jpg`,
                        media : '(min-width: 1280px)',
                    }
                ]
            },
            {
                original: `${PREFIX_URL}1.jpg`,
                thumbnail: `${PREFIX_URL}1t.jpg`,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: 'Custom class for slides & thumbnails'
            },
        ].concat(this._getStaticImages());
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.slideInterval !== prevState.slideInterval ||
            this.state.slideDuration !== prevState.slideDuration) {
            // refresh setInterval
            this._imageGallery.pause();
            this._imageGallery.play();
        }
    }

    _onImageClick(event) {
        console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
    }

    _onImageLoad(event) {
        console.debug('loaded image', event.target.src);
    }

    _onSlide(index) {
        this._resetVideo();
        console.debug('slid to index', index);
    }

    _onPause(index) {
        console.debug('paused on index', index);
    }

    _onScreenChange(fullScreenElement) {
        console.debug('isFullScreen?', !!fullScreenElement);
    }

    _onPlay(index) {
        console.debug('playing from index', index);
    }

    _handleInputChange(state, event) {
        this.setState({[state]: event.target.value});
    }

    _handleCheckboxChange(state, event) {
        this.setState({[state]: event.target.checked});
    }

    _handleThumbnailPositionChange(event) {
        this.setState({thumbnailPosition: event.target.value});
    }

    _getStaticImages() {
        let images = [];
        for (let i = 2; i < 12; i++) {
            images.push({
                original: `${PREFIX_URL}${i}.jpg`,
                thumbnail:`${PREFIX_URL}${i}t.jpg`
            });
        }

        return images;
    }

    _resetVideo() {
        this.setState({showVideo: {}});

        if (this.state.showPlayButton) {
            this.setState({showGalleryPlayButton: true});
        }

        if (this.state.showFullscreenButton) {
            this.setState({showGalleryFullscreenButton: true});
        }
    }

    _toggleShowVideo(url) {
        this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
        this.setState({
            showVideo: this.state.showVideo
        });

        if (this.state.showVideo[url]) {
            if (this.state.showPlayButton) {
                this.setState({showGalleryPlayButton: false});
            }

            if (this.state.showFullscreenButton) {
                this.setState({showGalleryFullscreenButton: false});
            }
        }
    }

    render() {
        return (
            <div>
                <section className="subpage-header flex-centered">
                    <div className="container flex-centered">
                        <div className="content flex-centered">
                            <h1>Galería</h1>
                        </div>
                    </div>
                </section>
                <section className='gallery'>
                    <ImageGallery
                        ref={i => this._imageGallery = i}
                        items={this.images}
                        lazyLoad={true}
                        onClick={this._onImageClick.bind(this)}
                        onImageLoad={this._onImageLoad}
                        onSlide={this._onSlide.bind(this)}
                        onPause={this._onPause.bind(this)}
                        onScreenChange={this._onScreenChange.bind(this)}
                        onPlay={this._onPlay.bind(this)}
                        infinite={this.state.infinite}
                        showBullets={this.state.showBullets}
                        showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
                        showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
                        showThumbnails={this.state.showThumbnails}
                        showIndex={this.state.showIndex}
                        showNav={this.state.showNav}
                        thumbnailPosition={this.state.thumbnailPosition}
                        slideDuration={parseInt(this.state.slideDuration)}
                        slideInterval={parseInt(this.state.slideInterval)}
                        additionalClass="app-image-gallery"
                    />
                </section>
            </div>
        );
    }
}

GalleryPageTemplate.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    intro: PropTypes.shape({
        blurbs: PropTypes.array
    }),
    main: PropTypes.shape({
        heading: PropTypes.string,
        description: PropTypes.string,
        image1: PropTypes.object,
        image2: PropTypes.object,
        image3: PropTypes.object
    }),
    testimonials: PropTypes.array,
    fullImage: PropTypes.string,
    pricing: PropTypes.shape({
        heading: PropTypes.string,
        description: PropTypes.string,
        plans: PropTypes.array
    })
};

const GalleryPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <GalleryPageTemplate
            image={frontmatter.image}
            title={frontmatter.title}
            heading={frontmatter.heading}
            description={frontmatter.description}
            intro={frontmatter.intro}
            main={frontmatter.main}
            testimonials={frontmatter.testimonials}
            fullImage={frontmatter.full_image}
            pricing={frontmatter.pricing}
        />
    );
};

GalleryPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object
        })
    })
};

export default GalleryPage;

export const galleryPageQuery = graphql`
  query GalleryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        heading
        description
        intro {
          blurbs {
            image
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        testimonials {
          author
          quote
        }
        full_image
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`;
