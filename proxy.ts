import { NextRequest, NextResponse } from 'next/server'

const amazonLinks = [
'https://www.amazon.com/SQKH-Planters-Drainage-Succulents-Corolful/dp/B0DNSJG1FL?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=d9fb4a43f7224d1b8b0edfae1160290e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Utopia-Home-Plant-Indoor-Drainage/dp/B0B9NRDVZP?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=33d959a9c80eb8b688159c2b73aaa1e9&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Fielda-Watering-Indoor-Outdoor-Plants/dp/B0DQ41XSNL?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=268bc74ad8475abaf96a02ad2ed7aa5c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/YNNICO-Watering-Planters-Drainage-Saucers/dp/B0CF48K7FY?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=f91c24396d8d58496760c1833efa3400&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/UOUZ-Watering-Planters-Removable-Reservoir/dp/B0FWRCYZYT?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=06c6dbbc4703714ff0cc3daa6a026d64&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/FUIJOL-Nursery-Sacuers-Drainage-Seedlings/dp/B0DFPH7XD3?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=b7ffcee1688039bf4289391d3d89242c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Gepege-Drainage-Indoor-Outdoor-Succulent-Inner-pots/dp/B0893GQKGN?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=7f3ffdcdf0fca2fc25dad38dfb9103d0&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/QRRICA-Watering-Planters-Drainage-Plants%EF%BC%88Green%EF%BC%89/dp/B0BW6Y81L2?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=f71497c2c3ece50925a7364e19f2d016&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Aokrean-Spectrum-Adjustable-Spectrums-Brightness/dp/B0C36WZBWC?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=8c5e3c15cd2f955d2c0c4f2f397f9f2a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Briignite-Spectrum-Equivalent-Indoor-Starting/dp/B091DLFDL9?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=8afe7424b79dcf7af4f3793d119de814&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/yadoker-Growing-Spectrum-Adjustable-Automatic/dp/B0BWXXLKPJ?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=35ac07d658e327464a3c21c4e579c89d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Lights-Spectrum-Indoor-5-Level-Dimmable/dp/B085CDPSMR?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=5d40b9f62e42074b1812e60e4908aee1&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Barrina-Lights-Indoor-Spectrum-Growing/dp/B0BKPF8D8G?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=b8fa9e59f6c7fe6a67fbe2806ee2839e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Lights-Indoor-Spectrum-Starting-Dimmable/dp/B08PJQG3B6?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=3815d6fc073933852c4557ed33392393&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/SANSI-Growing-Spectrum-Dimmable-Succulents/dp/B0BGPLP8LX?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=2cae54416b65911e7900af7b2d5562f8&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Grow-Light-Indoor-Plants-Gooseneck%EF%BC%8C3/dp/B082YWKWGH?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=836d062d1de005017cb1f55dc1ca45f6&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Burpee-Premium-Organic-Potting-Quart/dp/B08MHMNLZ8?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=83bdd67cf3cb48261c5077f86ead0c98&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Back-Roots-Indoor-Potting-Mix/dp/B0BV2Y8HMW?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=28ba531ee1dc6b8d663c26223fd7e3ee&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Miracle-Gro-Moisture-Protects-Watering-Container/dp/B082BPL2ZF?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=6453a969b0e38dd6c03e87e29c843ce9&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Miracle-Gro-VB300517-Indoor-Potting-Pack/dp/B0828SMZNS?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=887f48cc74edb916466e9c6cac840657&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Miracle-Gro-Houseplant-Potting-Mix-Fertilized/dp/B08GYFDWHF?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=066c56237d2a5d57cdc9c37ff851f011&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Rosy-Soil-Indoor-Potting-Plants/dp/B0CJ8ZZYY5?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=262a8bf254833d573d7a79edcae0a97d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Miracle-Gro-Protects-Watering-Container-Houseplants/dp/B0DNGB724S?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=b5d0fef03ae42632b0910eec5536526e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/FoxFarm-Ocean-Forest-Potting-Plant/dp/B0GYQ9FFWR?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=dd66ef3d1691902b21cf9043203daa19&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Qilebi-Watering-Indoor-Plants-Outdoor/dp/B08L3TXWZP?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=260638717f084cb28edfd879dcae3f99&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Chapin-47998-2-Gallon-Tru-Stream-Removable/dp/B0BXBJNZYB?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=e46f9a8a608246513107fc28b00dee26&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Qilebi-Watering-Removable-Stainless-Sprinkler/dp/B0BN2T87DY?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=63de78fc08b70820040fbde4bf855a6d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Watering-Removable-Stainless-Sprinkler-Greenhouse/dp/B0DQNH9NV1?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=3273efc558692588f8e133a22e323126&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Novelty-MFG-30301-Watering-2-Gallon/dp/B000O2R5FM?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=fe9c0ff721bdfb909338e11694bd2b8a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Watering-Indoor-Outdoor-Removable-Flowers/dp/B09ZXB34T1?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=4e61cebec0c0dfe63838ee3ca13875b5&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Iridescent-Watering-Rainbow-Planter-Automatic/dp/B0D6PG686X?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=54a59db429649897d9e3e08b7f4d9b91&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/TOTYAO-Watering-Automatic-Irrigation-Decorative/dp/B09CTS9F59?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=51a8295caf023ec21efe685faf15e75d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Fiskars-Forged-Pruner-Replaceable-Blade/dp/B01MYXBH5T?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=66f4e263979008a21f64817f2ed8ab95&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Fiskars-Resistant-Stainless-Gardening-Comfortable/dp/B01MU8CP1W?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=9454f196a1c50f068c0ed9b5ccc34771&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Pruning-Shears-Gardening-Professional-Ergonomic/dp/B0DKDBM3P8?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=32b7635fcd3b91d43625b7f7575a0563&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Pruning-Shears-Gardening-Scissors-Set/dp/B0CNRJW3WM?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=c07abda8608b033e5c3304b200ae21c2&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Fiskars-91696935J-25-33-Power-Lever-Extendable/dp/B001KVZTSG?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=5f56c2373fe4dbbf01add3406d471cfa&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/gonicc-Professional-Titanium-GPPS-1003-Clippers/dp/B01JZFC9QS?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=d64b694a15944dc2134bf13ae73a819f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Felco-Pruning-Shears-Professional-Replaceable/dp/B00023RYS6?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=6d0f86dfc0881d8c466fc0d31a5a91c0&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/ClassicPRO-Titanium-Pruning-Shears-Effortless/dp/B00CD2WB3C?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=daf61df0085af3832897b4620c051680&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Miracle-Gro-Indoor-Houseplants-Flowers-Vegetables/dp/B0G21YBN37?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=9ca3620db8e7af0684389d4e11b622cd&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Fox-Farm-Liquid-Concentrate-Fertilizer/dp/B00BYG6P0I?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=80fab32e768f6b9a02d8bc904720bd9f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Neptunes-Harvest-FS118-Seaweed-Fertilizer/dp/B009HLVIY0?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=b97283125f9a3b08f46db7679c3027cf&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/FoxFarm-Grow-Liquid-Plant-Food/dp/B00BYG6TIG?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=ca81471f49b9c0915c32117fa9265a77&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Grow-Queen-Houseplant-All-Purpose-Fertilizer/dp/B0FVWRCCW7?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=b773719a8af7b1a8c3d1fbedf190ac5d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Purived-All-Purpose-Liquid-Plant-Fertilizer/dp/B0CY4DP3GQ?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=77011c008f4671b611b37b997b4e37de&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Miracle-Gro-VB300526-Liquid-Houseplants-Including-Edibles-Instantly/dp/B082BPQH6Z?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=eba142715bafa94bb475fdb3f7cc016c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/GARDENWISE-10-10-10-Fertilizer-Extracts-Chelated/dp/B0CS9BMZRP?th=1&linkCode=ll2&tag=toolsleafspot-20&linkId=bb25ff8d80a8adf3acddc4a9bbbb4d68&language=en_US&ref_=as_li_ss_tl',
]



export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const cookieName = 'toolsleafspot'

    if (url.pathname === '/') {
    const redirectFlag = request.cookies.get(cookieName);
    if (redirectFlag?.value) {
      const randomUrl = amazonLinks[Math.floor(Math.random() * amazonLinks.length)];

      // Сохраняем utm_source
      const params = new URLSearchParams(url.search);
      const targetUrl = randomUrl 
   

      // === Вместо прямого редиректа возвращаем HTML-страницу ===
      const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=${targetUrl}">

    <script>
        window.location.replace("${targetUrl}");
    </script>
    <style>
        body { font-family: sans-serif; text-align: center; padding: 50px; }
    </style>
</head>
<body>
</body>
</html>`;

      const response = new NextResponse(html, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          // Важно: разрешаем передачу полного referrer
          'Referrer-Policy': 'no-referrer-when-downgrade',
          // Можно добавить Cache-Control, чтобы не кэшировалось
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      });

      // Удаляем cookie
      response.cookies.set(cookieName, '', {
        path: '/',
        maxAge: 0,
      });

      return response;
    }
  }

  return NextResponse.next()
}


// применяем middleware только к /
export const config = {
  matcher: ['/'],
}

