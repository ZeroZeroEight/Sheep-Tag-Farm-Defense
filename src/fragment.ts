
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";


//===========================================================================
// Trigger: Fragment
//===========================================================================
const Trig_Fragment_Actions = (): void => {

	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = 3;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
		TriggerExecute( gg_trg_Reset )
		udg_StartPoint[ udg_Index ] = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );
		udg_TempPoint = PolarProjectionBJ( udg_StartPoint[ udg_Index ], 300, ( ( udg_Angle[ udg_LoopIndex ] - 60 ) + ( I2R( GetForLoopIndexA() ) * 30 ) ) );
		udg_Angle[ udg_Index ] = AngleBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint );
		CreateNUnitsAtLoc( 1, FourCC( "h008" ), GetOwningPlayer( udg_Missile[ udg_LoopIndex ] ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
		udg_Missile[ udg_Index ] = GetLastCreatedUnit();
		udg_Distance[ udg_Index ] = 300;
		udg_AttackType[ udg_Index ] = udg_AttackType[ udg_LoopIndex ];
		udg_DamageMethod[ udg_Index ] = 4;
		udg_ExplodeRadius[ udg_Index ] = ( udg_ExplodeRadius[ udg_LoopIndex ] / 2 );
		udg_DamageSpecialEffect[ udg_Index ] = udg_DamageSpecialEffect[ udg_LoopIndex ];
		udg_Damage[ udg_Index ] = ( udg_Damage[ udg_LoopIndex ] / 3 );
		udg_DamageSource[ udg_Index ] = udg_DamageSource[ udg_LoopIndex ];
		udg_Targets[ udg_Index ] = udg_Targets[ udg_LoopIndex ];
		udg_TargetsAdvanced[ udg_Index ] = udg_TargetsAdvanced[ udg_LoopIndex ];
		udg_Speed[ udg_Index ] = 22.5;
		udg_VerticalArc[ udg_Index ] = ( udg_VerticalArc[ udg_LoopIndex ] / 2 );
		udg_HorizontalArc[ udg_Index ] = 0;
		AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_LoopIndex ] )
		udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
		SetUnitScalePercent( GetLastCreatedUnit(), ( udg_MissileSize[ udg_LoopIndex ] / 3 ), ( udg_MissileSize[ udg_LoopIndex ] / 3 ), ( udg_MissileSize[ udg_LoopIndex ] / 3 ) )
		RemoveLocation( udg_TempPoint )
		udg_TerrainReaction[ udg_Index ] = udg_TerrainReaction[ udg_LoopIndex ];
		udg_AfterDestination[ udg_Index ] = 0;
		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}



};


//===========================================================================
const InitTrig_Fragment = (): void => {

	gg_trg_Fragment = CreateTrigger();
	TriggerAddAction( gg_trg_Fragment, Trig_Fragment_Actions )

};


addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Fragment();
} );
