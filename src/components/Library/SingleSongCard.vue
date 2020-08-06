<template>
    <div class='music-card'>
        <div class="image">
            <img src="https://m.media-amazon.com/images/I/81fWIB5nfrL._UL600_.jpg" alt="song"/>
        </div>
        <header>
            <div class='left'>
                <h1>Daddy Yankee and Luis Fonsi</h1>
                <h2>Despacito</h2>
            </div>
            <div class='right'>
                <p class='play'><i class="fas fa-play-circle"></i></p>
                <p class='pause'><i class="fas fa-pause-circle"></i></p>
            </div>
        </header>
    </div>
</template>

<style lang="scss" scoped>
    .music-card {
        position: relative;
        width: 400px;
        margin: 20px auto;
        box-shadow: 1px 1px 4px rgba(0,0,0,.2);
        border: 2px solid #FDFF85;
        border-radius: 25px;
        overflow: hidden;
        color: #172727;
        .image {
            position: relative;
            width: 100%;
            height: 400px;
            img{
                width: 100%;
                height: auto;
                position: absolute;
            }
        }
        header {
            background: #E9ECEB;
            max-height: 190px;
            overflow: hidden;
            .left {
                padding: 30px 30px;
                float: left;
                width: 200px;
                h1 {
                    font-size: 18px;
                }
                h2 {
                    font-size: 14px;
                    margin: 5px 0;
                }
            }
            .right {
                padding: 30px 0;;
                width: 150px;
                display: flex;
                justify-content: flex-end;
                align-items: baseline;
                .play {
                    font-size: 40px;
                    cursor: pointer;
                    margin-right: 20px;
                }
                .pause {
                    font-size: 30px;
                    cursor: pointer;
                }
            }
        }
    }
</style>
