
export function iframeHtml(instaId: string): string {
    return `<iframe class="instagram-media instagram-media-rendered" id="instagram-embed-1" src="https://www.instagram.com/p/${instaId}/embed/?cr=1" allowtransparency="true" allowfullscreen="true" height="746" data-instgrm-payload-id="instagram-media-payload-1" style="background: white; max-width: 540px; width: calc(100% - 2px); border-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px 0px 12px; min-width: 326px; padding: 0px;"></iframe>`
}
