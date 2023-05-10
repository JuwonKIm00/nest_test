import { Body, Controller, 
    Delete, 
    Get, 
    Param, 
    Patch, 
    Post,
    Query
    } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDTO } from './dto/creat-movie.dto';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService){}

    @Get()
    getAll():Movie[] {
        return this.moviesService.getAll();
    }

    // @Get("/:search")
    // search(@Query("year") searchingYear: string){
    //     return `We are searching for a movie made after  : ${searchingYear}`
    // }

    @Get("/:id")
    getOne(@Param("id") movieId :number):Movie{
        console.log(typeof movieId)
        return this.moviesService.getOne(movieId);
    }

    @Post()
    createMovie(@Body() movieData: CreateMovieDTO){
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    deleteMovie(@Param("id") movieId: number){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch("/:id")
    path(@Param("id") movieId : number, @Body() updateData){
        return this.moviesService.update(movieId, updateData)
    }


}
