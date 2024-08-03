/* eslint-disable */
/* This is a auto generated file for building the project */ 

import { type ReactNode, useState } from "react";
import type { PageData } from "~/routes/_index";
import type { Asset } from "@webstudio-is/sdk";
import { Body as Body, Box as Box, Text as Text, Bold as Bold, Image as Image } from "@webstudio-is/sdk-components-react";
import { Link as Link } from "@webstudio-is/sdk-components-react-remix";

export const fontAssets: Asset[] = []
export const pageData: PageData = {"page":{"id":"JhurNVPej_LWv8xCVtq-O","name":"Home","title":"\"Home\"","rootInstanceId":"673TmZyOGpGaWHf4h7t3N","systemDataSourceId":"FHurz1af70On1pvlqboCz","meta":{},"path":""}};
export const user: { email: string | null } | undefined = {"email":"greyhetherington@gmail.com"};
export const projectId = "7d43a3f1-cad8-4515-afae-833300c92bae";

const Page = (props: { scripts?: ReactNode }) => {
return <Body
data-ws-id="673TmZyOGpGaWHf4h7t3N"
data-ws-component="Body">
<Box
data-ws-id="qC9T4L-6Vs-nCoIXpL4T7"
data-ws-component="Box">
<Image
data-ws-id="3xljbZBcOOT2IJk-rSnZR"
data-ws-component="Image"
src={"https://media.discordapp.net/attachments/1042576475255209986/1266892238848262235/greyh.org_logo_2.png?ex=66a6ccd7&is=66a57b57&hm=d9fef69183d2510be86a3c28bae30e3d2ddc7f269e8767e109b90b28b3d3f18c&=&format=webp&quality=lossless&width=1200&height=215"} />
</Box>
<Box
data-ws-id="SfjAYHhLedhjY4ZdNtEhJ"
data-ws-component="Box">
<Text
data-ws-id="nsHI4bh1LclKNtoKM7XT1"
data-ws-component="Text">
<Text
data-ws-id="KZevnlYq87VS_YpQpsE8T"
data-ws-component="Text"
tag={"span"}>
<Bold
data-ws-id="MIouUYKH_ngocOBw92ala"
data-ws-component="Bold">
{"Do you want to buy this website?"}
</Bold>
</Text>
<Text
data-ws-id="3o4Oq6LzXaWrkksu5pwRM"
data-ws-component="Text">
<Text
data-ws-id="4KqAIha6NUOB7iPi6Vw75"
data-ws-component="Text"
tag={"span"}>
{"Email "}
</Text>
<Link
data-ws-id="RlPahiP9VJS9oHO8jqyij"
data-ws-component="Link"
href={"mailto:contact@greyh.org"}>
{"contact@greyh.org"}
</Link>
</Text>
</Text>
</Box>
{props.scripts}
</Body>
}


export { Page }


  export const pagesPaths = new Set([""])

  export const formsProperties = new Map<string, { method?: string, action?: string }>([])
  
